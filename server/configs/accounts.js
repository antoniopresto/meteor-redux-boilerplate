const FACEBOOK_ID = ""
const FACEBOOK_SECRET = ""
const GOOGLE_ID = ""
const GOOGLE_SECRET = ""

Accounts.onCreateUser(function(options, user) {
    if (options.profile) {
        options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
        user.profile = options.profile;
    }
    return user;
});

// Set up login services
Meteor.startup(function() {
    ServiceConfiguration.configurations.update(
      { "service": "facebook" },
      {
        $set: {
          "appId": FACEBOOK_ID,
          "secret": FACEBOOK_SECRET
        }
      },
      { upsert: true }
    );

    ServiceConfiguration.configurations.update(
      { "service": "google" },
      {
        $set: {
          "clientId": GOOGLE_ID,
          "secret": GOOGLE_SECRET
        }
      },
      { upsert: true }
    )
});
