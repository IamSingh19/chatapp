export const sampleChats = [
    {
avatar:["https://w3schools.com/howto/img_avatar.png"],
name:"Jitu",
_id:"1",
groupChat:"false",
members:["1","2"], 
 },
 {
    avatar:["https://w3schools.com/howto/img_avatar.png"],
    name:"Jitu phon",
    _id:"2",
    groupChat:"false",
    members:["1","2"], 
     },
];

export const sampleUsers=[{
    avatar:"https://w3schools.com/howto/img_avatar.png",
    name:"Jitu",
    _id:"1",
},
{avatar:"https://w3schools.com/howto/img_avatar.png",
    name:"Jitu phon",
    _id:"2",
     },
]

export const sampleNotifications=[
    {
        sender:{
            avatar:"https://w3schools.com/howto/img_avatar.png",
            name:"Jitu",
        },
        _id:"1",
    },
    {
        sender:{
            avatar:"https://w3schools.com/howto/img_avatar.png",
            name:"Jitu phon",
        },
        _id:"2",
     },
    ]

    export const sampleMessage=[
{
    attachments:[
      
    ],
content: "lawde ka msge hai",
_id:"efwefhfw",
sender: {
    _id:"user._id",
    name: "chamna",
},
chat:"chatId",
createdAt:"2024-02-12T10:41:30.6302",
},

{
    attachments:[
        {
    public_id:"asbefw 2",
    url:"https://w3schools.com/howto/img_avatar.png",
},
    ],
content: "",
_id:"efwehggfhfw",
sender: {
    _id:"efwefhew",
    name: "chamna 2",
},
chat:"chatId",
createdAt:"2024-02-12T10:41:30.6302",
},
]


export const dashboardData = {
    users:[
        {
            name:"Jitu",
            avatar:"https://w3schools.com/howto/img_avatar.png",
            _id:"1",
            username: "jitu_man",
            friends: 20,
            groups: 5,
        },{
            name:"Jitu phon",
             avatar:"https://w3schools.com/howto/img_avatar.png",
            _id:"2",
            username:"phone_man",
            friends:3,
            groups: 6,
        },
    ] ,

    chats:[{
     name: "jitu group",
     avatar: ["https://w3schools.com/howto/img_avatar.png"],
     _id: "1",
     groupChat: false,
     members: [
        {_id:"1", avatar:"https://w3schools.com/howto/img_avatar.png"},
    {_id:"2", avatar:"https://w3schools.com/howto/img_avatar.png"},
],
     totalMembers: 2,
     totalMessages: 20,
     creator: {
        name: "Jitu",
        avatar: "https://w3schools.com/howto/img_avatar.png",
     },
    }, 
    {
        name: "pappu group",
        avatar: ["https://w3schools.com/howto/img_avatar.png"],
        _id: "2",
        groupChat: true,
        members: [
            {_id:"1", avatar:"https://w3schools.com/howto/img_avatar.png"},
        {_id:"2", avatar:"https://w3schools.com/howto/img_avatar.png"},
    ],
        totalMembers: 2,
        totalMessages: 24,
        creator: {
           name: "Jitu phon",
           avatar: "https://w3schools.com/howto/img_avatar.png",
        },
       }, 
],

messages: [
    {
        attachments: [],
        content: "lawde lle",
        _id: "wefbwef",
        sender: {
            avatar:"https://w3schools.com/howto/img_avatar.png",
            name: "chuttad",
        },
        chat: "chatId",groupChat: false,
        createdAt: "2024-02-12T10:41:30.630Z",
    },
    {
        attachments: [
            {
                public_id: "ewferb 2",
                url: "https://w3schools.com/howto/img_avatar.png",
            },
        ],
        content: "bhaandu",
        _id: "wefbwef 2",
        sender: {
        avatar:"https://w3schools.com/howto/img_avatar.png",
            name: "paadh",
        },
        chat: "chatId",
        groupChat:true,
        createdAt: "2024-02-12T10:41:30.630Z",
    },

],



}
