if(!Meteor.users.findOne()){
    let uid = Accounts.createUser({
        username: 'admin',
        email: 'antoniopresto@gmail.com',
        password: 'admin'
    })
    if(uid) Roles.addUsersToRoles(uid, ['admin']);

    if(process.env.NODE_ENV == 'production')
        throw new Error('ALTERE O USUÁRIO PADRÃO');
};

Meteor.isAdmin = (user, throwError) => {
    let _id = (_.isObject(user)) ? user._id : user
    let is = Roles.userIsInRole(_id, 'admin')
    if(!is && throwError) throw new Meteor.Error(401, 'Não autorizado.')
    return is
}
