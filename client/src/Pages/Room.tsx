import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Room = () => {
  const { roomId } = useParams<{ roomId: string }>();
  console.log(roomId)
  const [content, setContent] = useState('');

  const debounce = (func: Function, delay: number) => {
    let timer: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const updateContentInDatabase = async (payload: { id: string; content: string }) => {
    try {
     const result =  await axios.post('http://localhost:3000/enterContent', payload);
     console.log(result)
      console.log('Content updated successfully');
    } catch (error) {
      console.error('Error updating content:', error);
    }
  };

  const debouncedUpdateContent = debounce(updateContentInDatabase, 1000);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = event.target.value;
    setContent(newContent);
    debouncedUpdateContent({ id: roomId, content: newContent });
  };

  return (
    <div className='w-full flex h-screen overflow-hidden'>
      <div className='h-full w-[88%] bg-red-400'>
        <form className='w-full h-full'>
          <textarea
            className='w-full outline-none h-full'
            name="content"
            value={content}
            onChange={handleChange}
          ></textarea>
        </form>
      </div>
      <div className='h-full p-5 w-[12%] bg-blue-400'>
               <div className='w-full text-xl capitalize h-[6%] flex items-center justify-center rounded-xl bg-red-300'>
                              share
               </div>

      </div>


               <div className='w-full h-full top-0 left-0 absolute  bg-black/40 flex items-center justify-center'>

                              <div className='w-[25%] flex items-center justify-center h-[30%] rounded-lg bg-white'>
                                             {`http://localhost:5174/room/shared/${parseInt(roomId)}`}
                              </div>

               </div>

    </div>
  );
};

export default Room;
