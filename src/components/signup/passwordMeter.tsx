import zxcvbn from "zxcvbn";

type Props = {
  password: string;
};

const PasswordMeter = ({ password }: Props) => {
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;

  const createPassLabel = () => {
    switch (testResult.score) {
      case 0:
        return "Very weak";
      case 1:
        return "Weak";
      case 2:
        return "Fear";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      default:
        return "";
    }
  };

  const changeColor = () => {
    switch (testResult.score) {
      case 0:
        return "#828282";
      case 1:
        return "#EA1111";
      case 2:
        return "#FFAD00";
      case 3:
        return "#9bc158";
      case 4:
        return "#00b500";
      default:
        return "none";
    }
  };
  const changePasswordColor = () => ({
    width: `${num}%`,
    background: changeColor(),
    height: "7px",
  });

  return (
    <>
      <div className="progress h-5">
        <div className={"progress-bar"} style={changePasswordColor()}></div>
      </div>
      <div className="flex justify-around">
        <p className="text-sm">パスワードの強度 </p>
        <p className={"text-sm " + changeColor()}>{createPassLabel()}</p>
      </div>
    </>
  );
};

export default PasswordMeter;
