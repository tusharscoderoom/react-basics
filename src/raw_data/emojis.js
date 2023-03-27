const emojis = [
    {
        id: 1,
        icon: "🤔",
        title: "Thinking Face",
        desc: "This emoji means you are mulling something over or need some time to think about what the other person has suggested. You can also use it in a more sarcastic manner when you are mocking or skeptical about something."
    },
    {
        id: 2,
        icon: "🤩",
        title: "Grinning Face with Star Eyes",
        desc: "The star-struck emoji is used when you think that something (or someone!) is amazing, exciting or just pretty dang fabulous."
    },
    {
        id: 3,
        icon: "🥳",
        title: "Partying Face",
        desc: "Surrounded by confetti, wearing a cute party hat and blowing a party horn, the partying face is a perfect punctuation to use when celebrating good news, someone’s birthday, or a reason for a literal or figurative party."
    },
    {
        id: 4,
        icon: "🥰",
        title: "Smiling Face with Hearts",
        desc: "Typically used to show something is funny or pleasing—that you are shedding a tear from laughing so hard—Tears of Joy was the most-used emoji on Twitter in the early part of 2022!"
    },
    {
        id: 5,
        icon: "🤣",
        title: "Rolling on the Floor Laughing",
        desc: "The tilt of the yellow face in this emoji indicates that whatever has been said is not just funny, but it is so funny that it has you rolling on the floor laughing so hysterically that you are crying happy tears. So ROFL, friends."
    },
    {
        id: 6,
        icon: "😕",
        title: "Confused Face",
        desc: "Thanks to its sad eyes and frown, Confused Face conveys a wide variety of feelings, like sadness, disappointment, frustration, confusion and hesitation."
    },
    {
        id: 7,
        icon: "😱",
        title: "Face Screaming in Fear",
        desc: "This one sure does look like it was inspired by Edvard Munch’s iconic painting The Scream! Horror, fright, shock, and intense excitement (both positive and negative) are some of the extreme emotions that the face screaming in fear emoji represents."
    },
    {
        id: 8,
        icon: "❤️",
        title: "Red Heart",
        desc: "To express love to someone, feeling peaceful, thanking for some deeds."
    }
]

const limitedDesc = emojis.filter(
    (emoji) => {
        if(emoji.desc !== '' || emoji.desc !== ' '){
            // if(emoji.desc.length >= 100){

            // }
            return emoji.desc;
        }
    }
)

export default emojis;
export {limitedDesc};