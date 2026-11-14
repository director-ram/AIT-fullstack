// useRef stores a mutable value that persists
// between renders without causing a re-render when it changes.

import { useEffect } from "react"
import { useRef } from "react"

export const Ref = ()=>{
    let refer = useRef()

    useEffect(()=>{
        refer.current.focus()
    })

    let playv = ()=>refer.current.play()
    let pausev = ()=>refer.current.pause()
    return(<>
        <div className="col-5">
            <input type="text" ref={refer} className="form-control m-2"/>
        </div>
        <div className="col-5">
            <input type="text" className="form-control m-2"/>
        </div>

        <div className="col-6">
            {/* <iframe ref={refer} width="560" height="315" src="https://www.youtube.com/embed/2YLwepGTjUg?si=zgfCAmnLIMlDxHZz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
            <video ref={refer} controls width={300} height={200} src="https://video-previews.elements.envatousercontent.com/h264-video-previews/0a0b1c72-f85c-46b9-821d-50c6fb68f69a/10002525.mp4" className="video-controls rounded"></video><br/>
            <button className="btn btn-primary m-2" onClick={playv}> play</button>
            <button className="btn btn-primary m-2" onClick={pausev}> pause</button>
        </div>
    </>)
}