'use strict';
const rp = require('request-promise');
const alexaSkillKit = require('alexa-skill-kit');
const AlexaMessageBuilder = require('alexa-message-builder');


var propertiesObject = {method:'getQuote', format:'json', key:'', lang:'en'};
var url = 'http://api.forismatic.com/api/1.0/'





var SKILL_NAME = 'Motivational Quotes'

exports.handler = function (event, context) {
    alexaSkillKit(event, context, parsedMessage => {

       return  rp({ url: url, qs: propertiesObject }).then(body =>{
            console.log(body);
            var json = JSON.parse(body);
            console.log(json);
            var quote = json.quoteText;
            var author = json.quoteAuthor;
            var speechOutput = quote + ' by ' + author;

            return new AlexaMessageBuilder().addText(speechOutput).get();
        })
            .catch(function (err) {
                console.log(err);
            });





    });

};



