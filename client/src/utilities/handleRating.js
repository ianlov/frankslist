const handleRating = (rating) => {
  if (rating === 5) {
    return (
    <div className="stars">
      <span className="material-icons">star</span>
      <span className="material-icons">star</span>
      <span className="material-icons">star</span>
      <span className="material-icons">star</span>
      <span className="material-icons">star</span>
    </div>
    )
  } else if (rating < 5 && rating > 4) {
    return (
      <div className="stars">
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star_half</span>
      </div>
      )
  } else if (rating === 4) {
    return (
      <div className="stars">
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star_outline</span>
      </div>
      )
  } else if (rating < 4 && rating > 3) {
    return (
      <div className="stars">
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star_half</span>
        <span className="material-icons">star_outline</span>
      </div>
      )
  } else if (rating === 3) {
    return (
      <div className="stars">
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star_outline</span>
        <span className="material-icons">star_outline</span>
      </div>
      )
  } else if (rating < 3 && rating > 2) {
    return (
      <div className="stars">
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star_half</span>
        <span className="material-icons">star_outline</span>
        <span className="material-icons">star_outline</span>
      </div>
      )
  } else if (rating === 2) {
    return (
      <div className="stars">
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star_outline</span>
        <span className="material-icons">star_outline</span>
        <span className="material-icons">star_outline</span>
      </div>
      )
  } else if (rating < 2 && rating > 1) {
    return (
      <div className="stars">
        <span className="material-icons">star</span>
        <span className="material-icons">star_half</span>
        <span className="material-icons">star_outline</span>
        <span className="material-icons">star_outline</span>
        <span className="material-icons">star_outline</span>
      </div>
      )
  } else if (rating === 1) {
    return (
      <div className="stars">
        <span className="material-icons">star</span>
        <span className="material-icons">star_outline</span>
        <span className="material-icons">star_outline</span>
        <span className="material-icons">star_outline</span>
        <span className="material-icons">star_outline</span>
      </div>
      )
  } else {
    return (
      <div className="stars">
        <span className="material-icons">star_outline</span>
        <span className="material-icons">star_outline</span>
        <span className="material-icons">star_outline</span>
        <span className="material-icons">star_outline</span>
        <span className="material-icons">star_outline</span>
      </div>
      )
  }
}

export default handleRating;