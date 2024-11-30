import Hero from '../Components/Hero';
import HomeCards from '../Components/HomeCards'
import JobListings from '../Components/JobListings'
import ViewAllJobs from '../Components/ViewAllJobs';
function HomePage() {
  return (
  <>
  <Hero title="Become a React Dev" subtitle="Find the React Job that fits your skill set." />
  <HomeCards />
  <JobListings isHome='true'/>
  <ViewAllJobs />
  </>
  );
}

export default HomePage;