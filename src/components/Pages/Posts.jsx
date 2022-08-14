import { useState, useEffect } from 'react';
import PostList from '../PostList';
import PostForm from '../PostForm';
import PostFilter from '../PostFilter';
import MyModal from '../MyModal/MyModal';
import MyButton from '../UI/button/MyButton';
import { usePosts } from '../../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../UI/Loader/Loader';
import { useFetching } from '../../hooks/useFetching';
import { getPageCount, getPagesArray } from '../Utils/pages';
import Pagination from '../Pagination/Pagination';

function Posts() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState ({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts,filter.sort, filter.query);

  const [fetchPosts, isPostLoading, postError] = useFetching( async()=>{
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(()=>{
    fetchPosts()
  },[page])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p=>p.id!==post.id))
  }

  const changePage = page => {
    setPage(page)
  }

  return (
    <div className='App'>
        <MyButton style={{marginTop:'30px'}} onClick={()=>setModal(true)}>
            Coздать пользователя
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost}/>
        </MyModal>
          <hr style={{margin:'15px 0'}}/>
       <PostFilter 
          filter = {filter} 
          setFilter={setFilter}/>
          {postError && <h1> Произошла ошибка ${postError}</h1>}
          {isPostLoading 
              ? <div style ={{display:'flex', justifyContent:'center'}}> <Loader/></div>
              : <PostList 
              remove={removePost} 
              posts={sortedAndSearchedPosts} 
              title={'Список постов'}/>
          }
        <Pagination 
            page={page}
            changePage={changePage}
            totalPage={totalPages}/>
     </div>
  );
}

export default Posts;