const rbx = require("noblox.js")
async function startApp () {
    await rbx.cookieLogin("_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_F9F1EA531adk")
    // Do everything else, calling functions and the like.
    let currentUser = await rbx.getCurrentUser()
    console.log('Current User', currentUser);
}