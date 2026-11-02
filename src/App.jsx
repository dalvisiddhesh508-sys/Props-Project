
import Card from "./components/Card";

const App = () => {
  const jobs = [   
  {
    id: 1,
    brandLogo: "https://cdn.simpleicons.org/google",
    companyName: "Google",
    post: "Frontend Developer",
    datePosted: "2 days ago",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    
    location: "Mumbai, India"
  },
  {
    id: 2,
    brandLogo: "https://th.bing.com/th/id/OIP.m3cLbcDQgMv-VVFA_8mhMAHaFj?w=215&h=210&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
    companyName: "Microsoft",
    post: "React Developer",
    datePosted: "5 days ago",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$60 /hour",
   
    location: "Hyderabad, India"
  },
  {
    id: 3,
    brandLogo: "https://th.bing.com/th/id/OIP.0truUOcPqIBPaL6AfKXyngHaHa?w=250&h=250&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
    companyName: "Amazon",
    post: "Software Development Engineer",
    datePosted: "1 day ago",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$40 /hour",
    
    location: "Bengaluru, India"
  },
  {
    id: 4,
    brandLogo: "https://cdn.simpleicons.org/apple",
    companyName: "Apple",
    post: "UI/UX Developer",
    datePosted: "3 days ago",
    tag: "Part Time",
    tag2: "Junior Level",
    pay: "$30 /hour",
  
    location: "Mumbai, India"
  },
  {
    id: 5,
    brandLogo: "https://cdn.simpleicons.org/meta",
    companyName: "Meta",
    post: "Full Stack Developer",
    datePosted: "4 days ago",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$70 /hour",
   
    location: "London, UK"
  },
  {
    id: 6,
    brandLogo: "https://cdn.simpleicons.org/netflix",
    companyName: "Netflix",
    post: "Backend Developer",
    datePosted: "6 days ago",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$75 /hour",
   
    location: "Los Angeles, USA"
  },
  {
    id: 7,
    brandLogo: "https://cdn.simpleicons.org/nvidia",
    companyName: "NVIDIA",
    post: "AI Software Engineer",
    datePosted: "2 days ago",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Pune, India"
  },
  {
    id: 8,
    brandLogo: "https://th.bing.com/th/id/OIP.XDxTk0xxRfEKu_2iIkMx0QHaEK?w=356&h=210&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
    companyName: "Adobe",
    post: "Web Developer Intern",
    datePosted: "7 days ago",
    tag: "Part Time",
    tag2: "Junior Level",
    pay: "$25 - /hour",
    location: "Noida, India"
  },
  {
    id: 9,
    brandLogo: "https://th.bing.com/th/id/OIP.5jC8pzwf4MCqbfzQrCNpMQHaFj?w=283&h=213&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
    companyName: "Salesforce",
    post: "Node.js Developer",
    datePosted: "3 days ago",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$55 /hour",
    
    location: "Bengaluru, India"
  },
  {
    id: 10,
    brandLogo: "https://th.bing.com/th/id/OIP.fB8MqiJpYZV0UBjnmKMRqQHaE7?w=269&h=210&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
    companyName: "IBM",
    post: "Junior Software Engineer",
    datePosted: "5 days ago",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$30 /hour",
    
    location: "Chennai, India"
  }
];
console.log(jobs);

  return (
      <div className="parent">
        {jobs.map(function(elem,index){
          return <div key={index}>
            <Card  company ={elem.companyName} post={elem.post} tag1={elem.tag}  tag2={elem.tag2} pay={elem.pay} brandlogo={elem.brandLogo} datePosted={elem.datePosted}/>
          </div>
        })}
      </div>
  );
};

export default App;
