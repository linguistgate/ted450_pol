dependencies: [
    { src: 'plugin/audio-slideshow/audio-slideshow.js', condition: function( ) { return !!document.body.classLi$
    ],
   audio: {
       prefix: 'audio/',   // audio files are stored in the "audio" folder
       suffix: '.ogg',     // audio files have the ".ogg" ending
       textToSpeechURL: null,  // the URL to the text to speech converter
       defaultNotes: false,    // use slide notes as default for the text to speech converter
       defaultText: false,     // use slide text as default for the text to speech converter
       advance: 0,         // advance to next slide after given time in milliseconds after audio has played, use n$
       autoplay: true,    // automatically start slideshow
       defaultDuration: 5, // default duration in seconds if no audio is available
       playerOpacity: 0.05,    // opacity value of audio player if unfocused
       startAtFragment: false, // when moving to a slide, start at the current
   }
