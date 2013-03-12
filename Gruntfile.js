module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({

        mojito:{
            context:'build:debug',
            version:'0.5'

        },

        debug:{
            remoteDebug:true,
            liveEdit:true,
            httpPort:8000,
            instrument:{
                instrumentIgnoreDir:['mojito'],
                instrumentIgnoreFileRegex:["^mojito.*\.js$", "^LazyLoad.*\.js$", "loader.*\.js"]
            }
        },
        push:{
            packages:[]
        },
        rt:{
            version:'0.9',
            iconfile:'',
            devorship:'dev',
            simordev:'simulator'
        },

        package:{
            iossdk:'6.0',
            apilevel:14
        },
        launch:{
            devicefamily:'iphone'
        },

        deploy:{
            appfolder:[],
            instancename:''
        },
        screwdriver:{
            host:'http://screwdriver.corp.yahoo.com',
            apiHost:'http://api.screwdriver.corp.yahoo.com',
            hostPort:'4080',
            appID:'user-binchen',
            branch:'trunk',
            checkoutURL:'git@github.com:binchen911/binchentestmojitoapp.git'
        },
        joyent:{
            userName:'',
            address:''
        }

    });
};
