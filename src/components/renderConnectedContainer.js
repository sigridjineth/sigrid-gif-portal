import { SIGRID_GIFS } from "../assets/SIGRID_GIFS";
import { createGifAccount } from "./createGifAccount";
import { sendGif } from "./sendGif";

export const RenderConnectedContainer = ({
  inputValue,
  setInputValue,
  gifList,
  setGifList,
  programID,
  baseAccount,
}) => {
  if (gifList === null) {
    return (
      <div className="connected-container">
        <button
          type="submit"
          className="cta-button submit-gif-button"
          onClick={() => createGifAccount(programID, baseAccount, setGifList)}
        >
          Click Here to Unlock The Beauty of Sigrid ❤️
        </button>
      </div>
    );
  } else {
    return (
      <div className="connected-container">
        {/* submit your gifs */}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            sendGif(inputValue.value, gifList, setGifList, setInputValue, programID, baseAccount);
          }}
        >
          {/* https://stackoverflow.com/questions/41650512/input-field-is-not-editable-in-reactjs */}
          <input
            type="text"
            placeholder="Enter Sigrid gif link!"
            value={inputValue.value || ""}
            onChange={(event) => {
              setInputValue({ value: event.target.value });
            }}
          />
          <button type="submit" className="cta-button submit-gif-button">
            Submit
          </button>
        </form>

        {/* pre-hardcoded gifs */}
        <div className="gif-grid">
          {/* We use index as the key instead, also, the src is now item.gifLink */}
          {gifList.map((gifLink) => (
            <div className="gif-item" key={gifLink}>
              {console.log("&&&&&", gifLink)}
              <img src={gifLink} alt={gifLink}></img>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
