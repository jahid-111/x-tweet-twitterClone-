import { Route } from "react-router-dom";

const ExploreChildrenRoutes = () => (
  <>
    <Route index element={<h3>Explore Home</h3>} />
    <Route path="for-you" element={<h3>Explore For You</h3>} />
    <Route path="trending" element={<h3>Trending</h3>} />
    <Route path="news" element={<h3>News</h3>} />
    <Route path="sports" element={<h3>Sports</h3>} />
    <Route path="entertainment" element={<h3>Entertainment</h3>} />
  </>
);

export default ExploreChildrenRoutes;
// Wait for next
