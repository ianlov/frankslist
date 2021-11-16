import randomizer from "./randomizer.js"

/*
  Related Pseudo -- Sort based on Risk/Indoors
  - if Risk +/- DetailHobby
  - if Indoors===DetailHobby
  Add to relatedArray
  Pull 3 random from relatedArray
*/


const hobbies = [
  {
    name: "Basketball",
    img_url:
      "https://static01.nyt.com/images/2021/08/03/sports/03olympics-basketball-3q-1/03olympics-basketball-3q-1-superJumbo-v2.jpg",
    description:
      "Basketball is an indoor/ outdoor game played against teams that consists of using an inflated ball to score points by passing it through a horizontal hoop",
    price: { low: 0, high: 40 },
    rating: 4,
    indoors: false,
    risk: 2,
    featured: false,
  },
  {
    name: "Flag Football",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtmYC0hb5FIsk2butUs5JyV11GTLM7r3LFPw&usqp=CAU",
    description:
      "Flag football is a variant of American football where instead of tackling the players the ball is downed by pulling the other players flag",
    price: { low: 15, high: 120 },
    rating: 4,
    indoors: false,
    risk: 3,
    featured: false,
  },
  {
    name: "Flying a kite",
    img_url:
      "https://cdn11.bigcommerce.com/s-f311g/images/stencil/500x659/products/7428/9861/102306_g14__83406.1455816995.jpg?c=2",
    description:
      "Flying a kite is an old school way of clearing your mind. It involves a structure built with cloth attached to a string that allows you to use the wind as a means to fly your structure",
    price: { low: 5, high: 1500 },
    rating: 3,
    indoors: false,
    risk: 2,
    featured: false,
  },
  {
    name: "Soccer",
    img_url:
      "https://img.bleacherreport.net/img/images/photos/003/854/951/hi-res-c5f8b16c7cd714c965daee605973840a_crop_north.jpg?1582905000&w=3072&h=2048",
    description:
      "Soccer is a game played on a field between two teams of 11 players each with the object to propel a round ball into the opponent's goal by kicking or by hitting it with any part of the body except the hands and arms. Also known as Football in every country besides the US, Soccer is the most popular sport in the world.",
    price: {
      low: 0,
      high: 0,
    },
    Rating: 4.9,
    indoors: false,
    risk: 2,
    featured: true,
  },
  {
    name: "Jet Skiing",
    img_url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftahoesignatureproperties.com%2Fwp-content%2Fuploads%2F2016%2F08%2Fjet-ski-1125328_1920.jpg&f=1&nofb=1",
    description:
      "The activity of riding a motorized personal watercraft. One or two people ride on the water in much the same way as one rides a motorcycle. Jet skis are widely regarded as the most dangerous of all water craft due to a combination of factors. It is also great for developing your balance, coordination, and leg strength.",
    price: {
      low: 200,
      high: 20000,
    },
    rating: 4.8,
    indoors: false,
    risk: 4,
    featured: false,
  },
  {
    name: "Billiards",
    img_url:
      "https://cdn.quedos.com.au/wp-content/uploads/2021/07/billiards.jpg",
    description:
      "Billiards refers to any of various games played on a cloth-topped, cushion-railed rectangular table by driving small, hard balls against one another or into pockets, with a long stick called a cue.",
    price: {
      low: 7,
      high: 10,
    },
    rating: 4.3,
    indoors: true,
    risk: 1,
    featured: false,
  },
  {
    name: "Whitewater Kayaking",
    img_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Kayaker_Air_Loop_Reno.JPG/1280px-Kayaker_Air_Loop_Reno.JPG",
    description:
      "Whitewater kayaking is a recreational outdoor activity which uses a kayak to navigate a river or other body of whitewater or rough water. Whitewater kayaking is the sport where kayaks are ridden down rivers over waters of varying grades. Canoes and rafts are also used in the same way but are considered different sports because of the differences in boats, seating, and paddles.",
    price: {
      low: 500,
      high: 1500,
    },
    rating: 4.5,
    indoors: false,
    risk: 3,
    featured: false,
  },
  {
    name: "Flatwater Kayaking",
    img_url:
      "https://paddlingaway.com/wp-content/uploads/2018/10/paddling-an-inflatable-kayak-on-a-lake.jpg",
    description:
      "Flatwater kayaking refers to a type of kayaking that takes place on a body of water that is sheltered from waves, excessive wind, and current. It most typically takes place on small lakes, ponds and other tranquil bodies of water such as marshes or swamps. As there are fewer obstacles and challenges, flatwater kayaking is a great fit for beginners.",
    price: {
      low: 30,
      high: 800,
    },
    rating: 3.9,
    indoors: false,
    risk: 2,
    featured: false,
  },
  {
    name: "Brazilian Jiu-Jitsu",
    img_url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbeaufortmma-wpengine.netdna-ssl.com%2Fwp-content%2Fuploads%2F2017%2F03%2FDSC_0390.jpg&f=1&nofb=1",
    description:
      "Brazilian Jiu-Jitsu is a martial art and combat sport based on ground fighting and submission holds. It focuses on the skill of taking an opponent to the ground, controlling one's opponent, gaining a dominant position, and using a number of techniques to force them into submission via joint locks or chokeholds. BJJ revolves around the concept that a smaller, weaker person can successfully defend him/herself against a bigger, stronger, heavier opponent by using leverage and weight distribution, taking the fight to the ground and using a number of holds and submissions to defeat them. BJJ training can be used for sport grappling and self-defense situations.",
    price: {
      low: 80,
      high: 200,
    },
    rating: 4.9,
    indoors: true,
    risk: 3,
    featured: false,
  },
  {
    name: "Mountain Biking",
    img_url:
      "https://images.unsplash.com/photo-1511980494240-66bd42c7d919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    description:
      "Sport of riding bikes on off-road terrain. Typically, a specialized off-roading bike is used.",
    price: { low: 400, high: 800 },
    rating: 4.3,
    indoors: false,
    risk: 5,
    featured: false,
  },
  {
    name: "Tai Chi",
    img_url:
      "https://images.unsplash.com/photo-1511406850240-0ffe42effea8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1160&q=80",
    description:
      "Gentle physical exercises and stretches focusing on meditation and motion of the body. Tai Chi promotes connection between the body and mind.",
    price: { low: 0, high: 50 },
    rating: 4,
    indoors: true,
    risk: 1,
    featured: false,
  },
  {
    name: "Running",
    img_url:
      "https://websiteforrunners.com/wp-content/uploads/2020/07/Snapwire-Running-17-38ab6267e82c41a0b03b66469087aefb.jpg",
    description:
      "Running recreationally at parks, beaches, or in your neighborhood.",
    price: {
      low: 0,
      high: 0,
    },
    rating: 1.2,
    indoors: false,
    risk: 2,
    featured: false,
  },
  {
    name: "Knitting",
    img_url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsheepandstitch.com%2Fwp-content%2Fuploads%2F2014%2F05%2Fknitting-hands.jpg&f=1&nofb=1",
    description:
      "Knitting is a method by which yarn is manipulated to create a textile or fabric. It is used in many types of garments. Knitting may be done by hand or by machine. Knitting creates stitches: loops of yarn in a row, either flat or in the round. There are usually many active stitches on the knitting needle at one time. Knitted fabric consists of a number of consecutive rows of connected loops that intermesh with the next and previous rows. As each row is formed, each newly created loop is pulled through one or more loops from the prior row and placed on the gaining needle so that the loops from the prior row can be pulled off the other needle without unraveling. Differences in yarn, needle size, and stitch type allow for a variety of knitted fabrics with different properties, including color, texture, thickness, heat retention, water resistance, and integrity.",
    price: { low: 10, high: 40 },
    rating: 5,
    indoors: true,
    risk: 1,
    featured: false,
  },
  {
    name: "Road biking",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxmLQqxeY9-xR3Of2MMsft9Fa92pxtjSfiA&usqp=CAU",
    description:
      "This one is self explanatory: hop on a bike and get on the road. A fun activity that also helps increase your cardio. Take a scenic route and enjoy the view as you pedal away. Keep your eyes on the road!",
    price: { low: 18, high: 100 },
    rating: 0,
    indoors: false,
    risk: 3,
    featured: false,
  },
  {
    name: "paddleboarding",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Nr-i_9UsaohXHcHNemsEkqNUPMX_FA9Mog&usqp=CAU",
    description:
      "Too scared to surf? No worries, you can get the feel in a safer manner with paddle boards. Cruise your way along the water and enjoy the breeze.",
    price: { low: 30, high: 140 },
    rating: 0,
    indoors: false,
    risk: 2,
    featured: false,
  },
  {
    name: "walking",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5LmUEe4fZkf6P1c22NjRF7jdThT5FMgFhPw&usqp=CAU",
    description:
      "It’s good sometimes to go out and get a breath of fresh air. Take a friend or go by yourself and go anywhere. Get a nice workout to keep you in shape and enjoy your surroundings.",
    price: { low: 0, high: 1000000000 },
    rating: 1,
    indoors: false,
    risk: 2.69,
    featured: false,
  },
  {
    name: "flower arranging",
    img_url:
      "https://images.unsplash.com/photo-1606104218551-2c2ad1231dc3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
    description:
      "Floral design or flower arrangement is the art of using plant materials and flowers to create an eye-catching and balanced composition or display.",
    price: { low: 0, high: 30 },
    rating: 3,
    indoors: true,
    risk: 1,
    featured: false,
  },
  {
    name: "Video Games",
    img_url:
      "https://media.wired.com/photos/5926cb068d4ebc5ab806b7ed/master/pass/GettyImages-502197417.jpg",
    description:
      "Playing video games has become one of the most played hobbies in the world. The video game industry has been estimated to be larger than music and movies combined. Most popular systems include: PC, PS5, Xbox Series X, Nintendo Switch",
    price: { low: 0, high: 10000 },
    rating: 4.5,
    indoors: true,
    risk: 1,
    featured: false,
  },
];

const related = (hobbyDetail, hobbies) => {
  let related = hobbies.filter((hobby) => {
    return (
      hobby.indoors === hobbyDetail.indoors &&
      Math.floor(hobby.risk) === Math.floor(hobbyDetail.risk) &&
      hobby.name !== hobbyDetail.name
    )
  })
  console.log(related)
  related = randomizer(3, related)
  return related
}

console.log(related(
  {
    name: "paddleboarding",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Nr-i_9UsaohXHcHNemsEkqNUPMX_FA9Mog&usqp=CAU",
    description:
      "Too scared to surf? No worries, you can get the feel in a safer manner with paddle boards. Cruise your way along the water and enjoy the breeze.",
    price: { low: 30, high: 140 },
    rating: 0,
    indoors: false,
    risk: 2,
    featured: false,
  }, hobbies
))