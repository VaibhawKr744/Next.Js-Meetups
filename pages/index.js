 import MeetupList from '../components/meetups/MeetupList';

 const DUMMY_MEETUPS = [
     {
         id:'m1',
         title: 'A First Meetup',
         image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
         address:' some add 1',
         description:'This is a first meetup'
     },
     {
        id:'m2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Frauenkirche_Munich_-_View_from_Peterskirche_Tower2.jpg',
        address:' some add 2',
        description:'This is a second meetup'
    }
 ]
 function HomePage(props) {
     return <MeetupList meetups={props.meetups} />
 }

 export async function getStaticProps() {
     return{
         props: {
             meetups: DUMMY_MEETUPS
         },
         revalidate:1
     }
 }

 export default HomePage;