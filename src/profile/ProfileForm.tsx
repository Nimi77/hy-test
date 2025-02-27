import RequiredAsterisk from "../assets/asterik.svg?react";
import ProfileNavigation from "./ProfileNavigation";
import { useForm } from "react-hook-form";

// types for form fields to ensure type safety
interface ProfileFormValues {
  fieldOfStudy: string;
  gpa: string;
  institution: string;
  journey: string;
  interest: string;
}

// props for the ProfileForm component
interface ProfileFormProps {
  stepIndex: number;
  setStepIndex: (index: number) => void;
  isLastStep: boolean;
  onComplete: (completed: boolean) => void;
}

const ProfileForm = ({
  stepIndex,
  setStepIndex,
  isLastStep,
  onComplete,
}: ProfileFormProps) => {
  // react form hook to manage form state and validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    defaultValues: {
      institution: "",
      journey: "",
      fieldOfStudy: "",
      gpa: "",
      interest: "",
    },
  });

  // Function that handles form submission
  const onSubmit = () => {
    if (isLastStep) {
      // mark form as completed on the last step
      onComplete(true);
    } else {
      // move to the next step
      setStepIndex(stepIndex + 1);
    }
  };

  return (
    <>
      <form className="profile-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="institution" className="form-label">
              Name of Institution <RequiredAsterisk />
            </label>
            <select
              id="institution"
              className="form-select"
              {...register("institution")}
              defaultValue="wesonline"
            >
              <option value="wesonline">WESOnline</option>
              <option value="harvard">Harvard University</option>
              <option value="mit">MIT</option>
              <option value="stanford">Stanford University</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="journey" className="form-label">
              Where are you on your journey? <RequiredAsterisk />
            </label>
            <div className="select-wrapper">
              <span className="select-label">Label</span>
              <select
                id="journey"
                className="form-select"
                {...register("journey")}
                defaultValue="100"
              >
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
              </select>
            </div>
          </div>

          <div className="form-fieldset">
            {/* Field of Study Input */}
            <div className="form-group">
              <label htmlFor="fieldOfStudy" className="form-label">
                Field of Study <RequiredAsterisk />
              </label>
              <input
                type="text"
                id="fieldOfStudy"
                className="form-input"
                placeholder="Chemistry"
                {...register("fieldOfStudy", {
                  required: "Field Of Study is required",
                })}
              />
              {errors.fieldOfStudy && (
                <p className="error-message">{errors.fieldOfStudy.message}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="gpa" className="form-label">
                GPA <RequiredAsterisk />
              </label>
              <input
                type="text"
                id="gpa"
                className="form-input"
                placeholder="_ _ _ _ _"
                {...register("gpa", { required: "GPA is required" })}
              />
              {errors.gpa && (
                <p className="error-message">{errors.gpa.message}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="interest" className="form-label">
              What areas interest you most? <RequiredAsterisk />
            </label>
            <select
              id="interest"
              className="form-select"
              {...register("interest")}
              defaultValue="business"
            >
              <option value="business">Business & Management</option>
              <option value="data-science">Data Science</option>
              <option value="ai">Artificial Intelligence</option>
              <option value="finance">Finance & Economics</option>
              <option value="education">Education & Teaching</option>
            </select>
          </div>
        </div>

        {/* navigation Buttons */}
        <ProfileNavigation
          stepIndex={stepIndex}
          isLastStep={isLastStep}
          isFormComplete={Object.keys(errors).length === 0} // checks if there are no errors
          onBackStep={() => setStepIndex(stepIndex - 1)} // moves one step back
          onNextStep={
            isLastStep
              ? () => onComplete(true)
              : () => setStepIndex(stepIndex + 1)
          } // calls onComplete when it's the last step, otherwise goes to the next step
        />
      </form>
    </>
  );
};

export default ProfileForm;
