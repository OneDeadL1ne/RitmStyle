import { Route, Routes } from "react-router-dom";
import PostPage from "./pages/post";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";
import SessionPage from "./pages/sessions";
import Layout from "./components/Layout";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="post" element={<PostPage />} />
                <Route path="news" element={<NewsPage />} />
                <Route path="sessions" element={<SessionPage />} />
            </Route>
        </Routes>
    );
}

export default App;
