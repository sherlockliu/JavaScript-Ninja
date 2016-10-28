/**
 * Created by user on 2016/10/27.
 */
define(function(require, exports, module){
    var data = require('./data');
    var showName = function(){
        document.getElementById('show').value = data.name;
    };
    var $ = require('jquery');
    var me = require('me');
    console.log(me.value);
    var init = function(){
        $('show').val('hah');
    }
    module.exports ={
        init:init,
        showName:showName
    }
})
