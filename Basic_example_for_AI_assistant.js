// {Name: Dialogue}
// {Description: Learn how to create a dialog script with voice/text commands and text corpus for question answering}

// Use this sample to create your own voice/text commands
intent('hello world', p => {
    p.play('(hello|hi there)');
});


// Give your AI assistant some knowledge about the world
corpus(`
   I have 3 years of experience building and designing software. Currently, I love to work on web and mobile applications using technologies like React, Laravel, React-native, Objective-C, Java, JavaScript, Firebase, and Swift.
   You can contact me at pascal-musa@hotmail.com or at +32456180134.
`);
