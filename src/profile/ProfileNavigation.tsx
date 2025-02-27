interface ProfileNavigationProps {
  stepIndex: number;
  isLastStep: boolean;
  isFormComplete: boolean;
  onNextStep: () => void;
  onBackStep: () => void;
}

export default function ProfileNavigation({
  stepIndex,
  isLastStep,
  isFormComplete,
  onNextStep,
  onBackStep,
}: ProfileNavigationProps) {
  return (
    <div className="profile-buttons">
      <button
        className="not-filled"
        onClick={(e) => {
          e.preventDefault(); // prevents unwanted form submission
          if (stepIndex !== 0) onBackStep();
        }}
      >
        {stepIndex === 0 ? "Skip for Now" : "Go Back"}
      </button>

      <button
        className="filled"
        onClick={(e) => {
          e.preventDefault();
          onNextStep();
        }}
        disabled={isLastStep && !isFormComplete}
      >
        {isLastStep ? "Submit" : "Continue"}
      </button>
    </div>
  );
}
