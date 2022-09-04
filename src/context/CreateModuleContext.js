import { createContext, useMemo, useState } from 'react';

const Context = createContext();

function CreateModuleProvider({ children }) {
  const [moduleInfo, setModuleInfo] = useState({
    moduleName: '',
    moduleId: '',
  });

  const [allModuleLessons, setAllModuleLessons] = useState([]);

  const [praticalLesson, setPraticalLesson] = useState({
    lessonName: '',
    xpEarned: 0,
    coinsEarned: 0,
    description: '',
    alternative1: '',
    alternative2: '',
    alternative3: '',
    alternative4: '',
    correctAlternative: 0,
    urlAlternative1: '',
    urlAlternative2: '',
    urlAlternative3: '',
    urlAlternative4: '',
    moduleId: '',
  });

  const [theoricLesson, setTheoricLesson] = useState({
    lessonName: '',
    xpEarned: 0,
    coinsEarned: 0,
    description: '',
    content: '',
    moduleId: '',
  });

  const memoizedValues = useMemo(() => ({
    moduleInfo,
    setModuleInfo,
    praticalLesson,
    setPraticalLesson,
    theoricLesson,
    setTheoricLesson,
    allModuleLessons,
    setAllModuleLessons,
  }), [moduleInfo, praticalLesson, theoricLesson, allModuleLessons]);

  return (
    <Context.Provider
      value={memoizedValues}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, CreateModuleProvider };
