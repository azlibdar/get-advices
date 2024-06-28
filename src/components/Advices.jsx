/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

function Advices() {
  const [advice, setAdvice] = useState("Click to get advices..");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [trigger, setTrigger] = useState(0);

  const fetchAdvices = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();

      if (data.slip.advice === advice) {
        setTrigger((prev) => prev + 1);
      } else {
        setAdvice(data.slip.advice);
      }
    } catch (err) {
      setError("Failed to fetch advice");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (trigger > 0) {
      fetchAdvices();
    }
  }, [trigger]);

  const handleClick = () => {
    setTrigger((prev) => prev + 1);
  };

  return (
    <div className="app-default">
      <div className="w-full max-w-[700px] flex flex-col gap-4">
        <div className="w-full py-12 px-6 lg:py-20 lg:px-8 bg-primary-800 rounded-xl flex justify-center items-start">
          {isLoading ? (
            <Loader />
          ) : (
            <h3 className="text-left leading-snug lg:leading-snug font-body w-full text-2xl lg:text-4xl font-normal first-letter:text-b-rose text-secondary-50 selection:bg-b-rose selection:text-primary-900">
              {error ? error : advice}
            </h3>
          )}
        </div>
        <button onClick={handleClick} disabled={isLoading} className="btn-primary">
          GET ADVICES
        </button>
      </div>
    </div>
  );
}

function Loader() {
  return <div className="w-8 h-8 border-[4px] rounded-full border-primary-500 border-t-b-yellow animate-spin"></div>;
}

export default Advices;
