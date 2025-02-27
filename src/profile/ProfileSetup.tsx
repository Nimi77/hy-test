import GiftIcon from "../assets/gift.svg?react";
import ProfileForm from "./ProfileForm";
import CompletionModal from "./Modal";
import { steps } from "./steps";
import { useState } from "react";

export default function ProfileSetup() {
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [isFormComplete, setIsFormComplete] = useState<boolean>(false);

  const maxPoint = 1000;
  const pointPerStep = 200;
  const remainingPoints = maxPoint - (stepIndex + 1) * pointPerStep;
  const isLastStep = stepIndex === steps.length - 1;

  const handleCompletion = (completed: boolean) => {
    setIsFormComplete(completed);
  };

  const handleCloseModal = () => {
    // the form is reset to the first step when the modal is closed
    setIsFormComplete(false);
    setStepIndex(0);
  };

  return (
    <div className="container">
      <div className="profile-setup" id="profile-setup">
        {/* progress bar */}
        <div className="progress-bar">
          {steps.map((_, index: number) => (
            <div
              key={index}
              className={`bars ${index <= stepIndex ? "active" : ""}`}
            ></div>
          ))}
        </div>

        {/* heading & step reward */}
        <div className="heading">
          <h1>{steps[stepIndex].title}</h1>
          <p className="form-description">{steps[stepIndex].description}</p>
          <p className="esa-point">
            {remainingPoints} WESPoint remaining to unlock ESA
          </p>
        </div>

        <div className="step-reward">
          <span className="gift-icon">
            <GiftIcon />
          </span>
          <p>Your reward for this step is {pointPerStep} WESPoints</p>
        </div>

        {/* profile main content */}
        <div className="main-content">
          <ProfileForm
            stepIndex={stepIndex}
            setStepIndex={setStepIndex}
            isLastStep={stepIndex === steps.length - 1}
            onComplete={handleCompletion}
          />
        </div>
      </div>

      {/* show modal if form is fully completed on last step */}
      {isLastStep && isFormComplete && (
        <div className="modal-overlay">
          <CompletionModal handleClose={handleCloseModal} />
        </div>
      )}
    </div>
  );
}
