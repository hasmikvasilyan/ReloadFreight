import ReactPlayer from "react-player";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';

function Player({ open, onCloseModal }) {
   
  return (
    <Modal
        open={open}
        onClose={onCloseModal}
        styles={{
          modal: {
            maxWidth: "unset",
            width: "100%",
            padding: "unset"
          },
          overlay: {
            background: "rgba(0, 0, 0, 0.5)"
          },
          closeButton: {
            background: "linear-gradient(180deg, #f4ea0e -51.7%, #f29023 137.04%)",
            borderRadius:"50%"
          }
        }}
        center
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=TizPkLxZONU"
          width="100%"
          height="calc(100vh - 100px)"
        />
    </Modal>
  )
}
export default Player
