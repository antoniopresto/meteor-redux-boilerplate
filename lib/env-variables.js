if (Meteor.isServer) {
  Meteor.isDev = process.env.NODE_ENV == 'development';

  Meteor.methods({
    isDev() {
      this.unblock();
      return Meteor.isDev;
    }
  });

} else {
  Meteor.call('isDev', (e, r) => {
    Meteor.isDev = r;
    Session.set('isDev', 1);
  });
}
