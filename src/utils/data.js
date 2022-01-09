export const categories = [
  {
    name: " Portrait",
    image:
      "https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    name: "Landscape",
    image:
      "https://images.pexels.com/photos/601174/pexels-photo-601174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    name: "Family",
    image:
      "https://images.pexels.com/photos/6040989/pexels-photo-6040989.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    name: "Sports / Action",
    image:
      "https://images.pexels.com/photos/35990/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    name: "Architectural",
    image:
      "https://images.pexels.com/photos/3172740/pexels-photo-3172740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    name: "Food",
    image:
      "https://images.pexels.com/photos/5945574/pexels-photo-5945574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Fashion",
    image:
      "https://images.pexels.com/photos/4566871/pexels-photo-4566871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Abstract",
    image:
      "https://images.pexels.com/photos/5022849/pexels-photo-5022849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Travel",
    image:
      "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Black And White",
    image:
      "https://images.pexels.com/photos/5976886/pexels-photo-5976886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Situational ",
    image:
      "https://images.pexels.com/photos/10248389/pexels-photo-10248389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    name: "Street",
    image:
      "https://images.pexels.com/photos/1820947/pexels-photo-1820947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    name: "other",
    image:
      "https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg",
  },
];

export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
  image{
    asset->{
      url
    }
  },
      _id,
      _createdAt,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    } `;

export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
    image{
      asset->{
        url
      }
    },
    _id,
    _createdAt,
    title, 
    about,
    category,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
   save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    }
  }`;
  return query;
};

export const pinDetailMorePinQuery = (pin) => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
    image{
      asset->{
        url
      }
    },
    _id,
    _createdAt,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
        image{
          asset->{
            url
          }
        },
            _id,
            _createdAt,
            destination,
            postedBy->{
              _id,
              userName,
              image
            },
            save[]{
              _key,
              postedBy->{
                _id,
                userName,
                image
              },
            },
          }`;
  return query;
};

export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const userCreatedPinsQuery = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
    image{
      asset->{
        url
      }
    },
    _id,
    _createdAt,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const userSavedPinsQuery = (userId) => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
    _id,
    _createdAt,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

// export const userQuery = (userId) => {
//   const query = `*[_type == "user" && _id == '${userId}']`;
//   return query;
// };

// export const searchQuery = (searchTerm) => {
//   const query = `*[_type == "pin" && title match '${searchTerm}* ' || category match '${searchTerm}*' || about match '${searchTerm}*' ]{
//     image {
//       asset -> {
//         url
//       }
//     },
//     _id,
//     destination,
//     postedBy -> {
//       _id,
//       userName,
//       image
//     },
//     save[] {
//       _key,
//       postedBy -> {
//         _id,
//         userName,
//         image
//       },
//     },
//   }`;

//   return query;
// };

// export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
//   image{
//     asset->{
//       url
//     }
//   },
//       _id,
//       destination,
//       postedBy->{
//         _id,
//         userName,
//         image
//       },
//       save[]{
//         _key,
//         postedBy->{
//           _id,
//           userName,
//           image
//         },
//       },
//     } `;
