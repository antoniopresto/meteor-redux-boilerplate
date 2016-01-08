import { createClass } from "react"
import Hammer from "hammerjs"

export default createClass({
    getInitialState(){
        return {
            className: 'stopped'
        }
    },

    componentDidMount(){
        this.initHammer();
    },

    initHammer() {
        let onPanStart = this.props.onPanStart || function(){};
        let onPan = this.props.onPan || function(){};
        let onPanEnd = this.props.onPanEnd || function(){};
        let onTap = this.props.onTap || function(){};

        let qtd = this.props.qtd || 2; //slides
        this.element = ReactDOM.findDOMNode(this.refs.element);
        let ww = this.props.width || $(this.element).width();

        this.index = this.props.index || 0;
        let maxIndex = qtd - 1;
        let triggerDistance = ww / (this.props.triggerDistance || 3);
        this.actualPosition = 0;
        this.lastStoppedPosition = this.index * -ww;
        this.quocient = 1;
        this.freio = this.props.freio || 0.5;

        this.hammer = new Hammer(this.element, {direction: Hammer.DIRECTION_HORIZONTAL});

        //parseInt because NaN can't limit (can't compare)
        this.limitLeft = parseInt(this.props.limitLeft);
        this.limitRight = parseInt(this.props.limitRight);

        this.isLimit = () => {
            if(this.limitRight <= this.actualPosition) return 1;
            if(this.actualPosition <= 0 && -Math.abs(this.limitLeft) >= this.actualPosition) return 1;
        };

        this.setIndex = (index) => {
            this.index = index;
            this.handlePan(0, true);
        };

        this.handlePan = (deltaX = 0, isEnd)=>{
            this.actualPosition = (isEnd) ? this.index * -ww : deltaX*this.freio + this.lastStoppedPosition;
            this.quocient = (ww + this.actualPosition) / ww;

            onPan(this);

            if(this.props.move){
                let velocity = (isEnd) ? (this.props.velocity || '300ms') : '0ms';
                HSlide.setTransform(this.element, `translate3d(${this.actualPosition}px, 0, 0)`, velocity);
            }
        };

        this.hammer.on('tap', (ev)=>{
            onTap(ev, this);
        });

        //onPanStart
        this.hammer.on('panstart', (ev) => {
            onPanStart(ev);
            this.setState({className: 'moving'});
        });

        //seta posição atual
        this.hammer.on('pan', (ev) => {
            ev.srcEvent.stopPropagation();

            if(this.isLimit()) return;

            var angle = Math.abs(ev.angle);
            if (angle >= 90 && angle < 150) return;
            if (angle > 30 && angle < 90) return;

            this.handlePan(ev.deltaX);
        });

        //set index, DOM className's
        this.hammer.on('panend', (ev) => {
            this.setState({className: 'stopped'});

            if (Math.abs(ev.deltaX * this.freio) < triggerDistance)
                return this.handlePan(ev.deltaX, 'panend'); //not moved enough

            (ev.deltaX < 0) ? ++this.index : --this.index; //right - left

            //this.index limits
            if (this.index > maxIndex) this.index = maxIndex;
            if (this.index < 0) this.index = 0;

            this.lastStoppedPosition  = this.index * -ww;

            onPanEnd(ev);
            this.handlePan(ev.deltaX, 'panend');
        });

        //set index from props
        this.handlePan(0, true);
    },

    componentWillUnmount: function() {
        if (this.hammer) {
            this.hammer.stop();
            this.hammer.destroy();
        }
        this.hammer = null;
    },

    statics: {
        setTransform(el, str, velocity){
            let t = velocity || '500ms';

            el.style['-webkit-transition'] = t;
            el.style['-moz-transition'] = t;
            el.style['-ms-transition'] = t;
            el.style['-o-transition'] = t;

            el.style['transform'] = str;
            el.style['-webkit-transform'] = str;
            el.style['-moz-transform'] = str;
            el.style['-ms-transform'] = str;
            el.style['-o-transform'] = str;
        }
    },

    render(){
        return(
            <div id={this.props.id||''}
                className={`${this.props.className||''} hslide--${this.state.className}`}
                ref="element">
                {this.props.children}
            </div>
        );
    }
});
