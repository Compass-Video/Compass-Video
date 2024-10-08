import './CustomBtn.css'

function CustomBtn({ trailer }: { trailer?: boolean }) {
  return (
    <div>
      {trailer ?(
        <button className="moreInfo">TRAILER</button>)
        : (
      <button className="moreInfo">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4C7.584 4 4 7.584 4 12C4 16.416 7.584 20 12 20C16.416 20 20 16.416 20 12C20 7.584 16.416 4 12 4ZM12 16C11.56 16 11.2 15.64 11.2 15.2V12C11.2 11.56 11.56 11.2 12 11.2C12.44 11.2 12.8 11.56 12.8 12V15.2C12.8 15.64 12.44 16 12 16ZM12.8 9.6H11.2V8H12.8V9.6Z"
            fill="white"
          />
        </svg>
        MAIS INFORMAÇÕES
      </button>)}
    </div>
  );
}

export default CustomBtn;
