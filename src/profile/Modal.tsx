import GiftIcon from "../assets/gift.svg?react";

interface CompletionModalProps {
  // function to close the modal and reset the process
  handleClose: () => void;
}

const CompletionModal = ({ handleClose }: CompletionModalProps) => {
  return (
    <>
      <div className="modal-content">
        {/* close button to reset the profile setup */}
        <button className="close-btn" onClick={handleClose}>
          &times;
        </button>

        <div className="modal-body">
          {/* header section with congratulatory message */}
          <div className="modal-header">
            <div className="congrats-gif">
              <img
                src="/congrats-animation.png"
                alt="congratulation animation"
              />
            </div>
            <div className="congrats-text">
              <h1>Congratulations</h1>
              <p>You’ve earned 1000 WESPoints</p>
            </div>
          </div>

          {/* rewards section */}
          <div className="wes-points">
            <div className="rewards-header">
              <span className="gift-icon">
                <GiftIcon />
              </span>
              <h2>Your Rewards</h2>
            </div>

            <div className="rewards-content">
              <div className="reward-details">
                <span className="reward-points">2000 WESPoints Unlocked</span>
                <p>
                  Want to know your employability status? Take the ESA with your
                  2000 WESPoints to get started!
                </p>
              </div>
              <button className="esa-btn filled">Take ESA</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompletionModal;
