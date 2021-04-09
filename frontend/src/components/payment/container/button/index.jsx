import React from "react";

function Button({ processing, disabled, succeeded, handleSubmit, className }) {
  if (processing) {
    return <span className={className}>Processing</span>;
  }
  if (disabled || succeeded) {
    return (
      <button className={className} disabled={disabled || succeeded}>
        Buy Now
      </button>
    );
  }
  return (
    <button className={className} onClick={handleSubmit}>
      Buy Now
    </button>
  );
}

export default Button;
