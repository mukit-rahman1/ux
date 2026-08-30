import { useState } from "react"

export default function EventImageGallery({ images, frameClassName = "event-image-frame", alt = "Event" }) {
    const [index, setIndex] = useState(0)

    const list = images && images.length > 0 ? images : ["/event-placeholder.svg"]
    const hasMultiple = list.length > 1
    const safeIndex = index % list.length

    const goPrev = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setIndex((i) => (i - 1 + list.length) % list.length)
    }

    const goNext = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setIndex((i) => (i + 1) % list.length)
    }

    return (
        <div className={frameClassName}>
            <img src={list[safeIndex]} alt={alt} draggable={false} />
            {hasMultiple && (
                <>
                    <button
                        type="button"
                        className="event-image-nav-btn event-image-nav-prev"
                        onMouseDown={(e) => e.stopPropagation()}
                        onClick={goPrev}
                        aria-label="Previous image"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        className="event-image-nav-btn event-image-nav-next"
                        onMouseDown={(e) => e.stopPropagation()}
                        onClick={goNext}
                        aria-label="Next image"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    <div className="event-image-counter">{safeIndex + 1}/{list.length}</div>
                </>
            )}
        </div>
    )
}
