import React from 'react'

function AllVideo() {
    const [videos, setVideos] = React.useState([])
    const [onDeleate, setOnDeleate] = React.useState(0)
    React.useEffect(() => {
        fetch('http://localhost:4000/video/getallwa')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setVideos(data)
        })
    }, [onDeleate])
    const deleateVideo = (id) => {
        fetch(`http://localhost:4000/video/delwatch/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.success) {
                setOnDeleate(onDeleate + 1)
                const newVideos = videos.filter(video => video.id !== id)
                setVideos(newVideos)
            }
        })
    }
  return (
        <div>
            <div className='videos546488'>
                {videos.length > 0 &&
                    videos.map((video, index) => {
                        return (
                            <div key={index} className='videocart'>
                                <video  controls src={`${video.video_path}`} />
                                <h2>{video.date}</h2>
                                <button className='DleateVideo' onClick={() => deleateVideo(video._id)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
  )
}

export default AllVideo