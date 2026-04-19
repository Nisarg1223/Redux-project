import React, { useEffect } from 'react'
import { fetchPhotos, fetchVideos, fetchGifs } from '../api/mediaApi/'
import { setLoading, setResults, setError, clearResults } from '../redux/slice/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './ResultCard'
import '../App.css'

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector((store) => store.search);

  useEffect(() => {
    async function getTab() {
      if (!query) {
        dispatch(clearResults());
        return;
      }

      try {
        dispatch(setLoading());
        let data = [];

        if (activeTab === 'Photos') {
          const res = await fetchPhotos(query);
          data = res.results.map((item) => ({
            id: item.id,
            type: 'Photo',
            thumbnail: item.urls.small,
            src: item.urls.full,
            title: item.alt_description || 'Photo',
            url:item.links.html
          }));
        }

        if (activeTab === 'Videos') {
          const res = await fetchVideos(query);
          data = res.videos.map((item) => ({
            id: item.id,
            type: 'Video',
            thumbnail: item.image,
            src: item.video_files[0]?.link,
            title: item.user.name || 'Video',
            url:item.url
          }));
        }

        if (activeTab === 'GIFs') {
          const res = await fetchGifs(query);
         
          data = res.results.map((item) => ({
            id: item.id,
            type: 'GIF',
            thumbnail: item.media_formats.tinygif.url,
            src: item.media_formats.gif.url,
            title: item.title || 'GIF',
            url:item.url
          }));
        }

        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    }

    getTab();
  }, [query, activeTab, dispatch]);

  if (error) return <h2 className="status-msg">Something went wrong: {error}</h2>;
  if (loading) return <h2 className="status-msg">Loading...</h2>;
  if (!loading && results.length === 0) return <h2 className="status-msg">No results found</h2>;

  return (
    <div className="Card-Parent">
      {results.map((ele, idx) => (
        <a target="_blank" href={ele.url}><ResultCard key={idx} item={ele} /></a>
      ))}
    </div>
  )
}

export default ResultGrid