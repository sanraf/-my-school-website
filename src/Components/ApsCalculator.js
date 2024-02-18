import React, { useEffect, useState } from 'react';
import '../styles/ApsCalculator.css'
import noticeIcon from '../assets/noticeIcon.png'

const ApsCalculator = () => {


    const subjects = [
  
        
        'English',
        'Accounting',
        'Geography',
        'Economics',
        'History',
        'Tourism',
        'Mathematics',
        'Mathematical Lit',
        'Physical science',
        'Home languge',
        'Life science',
        'Business studies',
        'Consumer studies',
        'Hospitality studies',
        'Agricultural sciences',
        'Other subject1',
        'Other subject2',
        'Other subject3',
        'Other subject4',
        
    
      ];
      const marksOptions = ['0-29%', '30-39%', '40-40%', '50-59%', '60-69%', '70-79%', '80-100%'];

      const [total, setTotal] = useState(0);

      const [generalMsg,setGeneralMsg] = useState('');

      const [isResultVisible, setIsResultVisible] = useState(false);
      const [isInstructionVisible,setIsInstructionVisible] = useState(true);


      const noticeMsg = 'This specified APS represent the minimum criteria, but it\'s important to understand that meeting these scores doesn\'t guarantee admission to any university programme. Different universities may have their unique entry requirements for specific courses, which can vary from one institution to another.'

      let infoMsg = 'Your Admission Points Score (APS) gauges your performance in your National Senior Certificate (NSC) exam concerning the criteria for a specific programme you\'re interested in applying for'+'\n'+'.Your APS is rated on a scale with a maximum score of 42 and note that Life Orientation does not count towards your APS. APS calculator aids you in computing your APS, enabling you to evaluate whether you meet the admission requirements for a specific programme.When calculating your APS, choose your subject and input the corresponding percentage from the dropdown menu. If your subject isn\'t listed, select \'Additional Subject\' and make sure to fill in all the boxes ,click the "CALCULATE" button to obtain your APS and "RESET" to clear thae table.'
    
    
      const defaultSubject = 'Subject';
      const defaultMark = 'Marks';
      const defaultLevel = '0';
    
      const [selectedSubjects, setSelectedSubjects] = useState({
      
        English: defaultSubject,
        Accounting: defaultSubject,
        Geography:defaultSubject,
        Economics:defaultSubject,
        History:defaultSubject,
        Tourism:defaultSubject
        
      });
    
      const [selectedMarks, setSelectedMarks] = useState({
    
        English: defaultMark,
        Accounting: defaultMark,
        Geography:defaultMark,
        Economics:defaultMark,
        History:defaultMark,
        Tourism:defaultMark
      });
    
    
      const [selectedLevels, setSelectedLevels] = useState({
    
        English: defaultLevel,
        Accounting: defaultLevel,
        Geography:defaultLevel,
        Economics:defaultLevel,
        History:defaultLevel,
        Tourism:defaultLevel
      });
    
    
    
      const handleSubjectChange = (subject, event) => {
        const selectedSubject = event.target.value;
        const updatedSubjects = { ...selectedSubjects };
        setSelectedSubjects(updatedSubjects);
    
        //prevents subject duplication
        updatedSubjects[subject] = Object.values(selectedSubjects).includes(selectedSubject)
        ? (alert(`You have already selected ${selectedSubject}`), defaultSubject)
        : selectedSubject;
      
      };
    
      const handleMarksChange = (subject, event) => {
        const selectedMark = event.target.value;
        const updatedMarks = { ...selectedMarks };
        updatedMarks[subject] = selectedMark;
        setSelectedMarks(updatedMarks);
    
        // populate level column base on percentage
        let level = defaultLevel;
         if (selectedMark === '0-29%') {level = '1';}
         else if (selectedMark === '30-39%') {level = '2';}
         else if (selectedMark === '40-40%') {level = '3';}
         else if (selectedMark === '50-59%') {level = '4';}
         else if (selectedMark === '60-69%') {level = '5';}
         else if (selectedMark === '70-79%') {level = '6';}
         else if (selectedMark === '80-100%') {level = '7';}
         
    
        const updatedLevels = { ...selectedLevels };
        updatedLevels[subject] = level;
        setSelectedLevels(updatedLevels);
      };
    
      function sumOfLevel(){
        
        const selectedMarksValues = Object.values(selectedLevels);
        const validMarks = selectedMarksValues.filter(
          (mark) => mark !== defaultLevel
        );
        const sum = validMarks.reduce(
          (accumulator, currentMark) =>
            accumulator + parseInt(currentMark),
          0
        );
        setTotal(sum);
        displayGeneralMsg(sum)
        setIsResultVisible(true);
        setIsInstructionVisible(false);
    
      };
    
    
      const calculateAps = () => {
    
         //condition for marks and subject
        const allSubjectsSelected = Object.values(selectedSubjects).find((unselectedSubject)=>unselectedSubject===defaultSubject);
        const allLevesSelected = Object.values(selectedLevels).find((unselectedMarks)=>unselectedMarks===defaultLevel)
       
        {(allSubjectsSelected || allLevesSelected) ?  alert('field of subject or marks is required') : sumOfLevel()};
     
      };

      // event handler to reset calculator
      const handleReset = () => {
        
        setSelectedSubjects({
        English: defaultSubject,
        Accounting: defaultSubject,
        Geography:defaultSubject,
        Economics:defaultSubject,
        History:defaultSubject,
        Tourism:defaultSubject
        });
    
        setSelectedMarks({
          English: defaultMark,
          Accounting: defaultMark,
          Geography:defaultMark,
          Economics:defaultMark,
          History:defaultMark,
          Tourism:defaultMark
        });
    
        setSelectedLevels({
          English: defaultLevel,
          Accounting: defaultLevel,
          Geography:defaultLevel,
          Economics:defaultLevel,
          History:defaultLevel,
          Tourism:defaultLevel
        });
    
        setTotal(0);
        setGeneralMsg('');
        setIsResultVisible(false);
        setIsInstructionVisible(true);
      };

      
    
      function displayGeneralMsg(aps){
    
        let message;
        if (aps < 15) {message = 'National Senior Certificate';}
        else if (aps >= 15 && aps < 19){message = 'Higher Certificate';} 
        else if (aps >= 19 && aps < 23) { message = 'Diploma'; } 
        else { message = 'Bachelor Degree';}
        setGeneralMsg(message); }
    
    

    
      
      return (
        <div className='mainSection'>
          <div className='headingWrapper'>
            <h1 className='heading'>APS Score calculator</h1>
            <hr/>
            <p className='paragraph'>Lorem ipsum dolor sit amet consectetur. Blandit sit eget quis orci. In volutpat nunc nisl est ut. Tincidunt mauris felis viverra senectus . Lorem ipsum dolor sit amet consectetur. Blandit sit eget quis orci. In volutpat nunc nisl est ut. Tincidunt mauris felis viverra senectus</p>
          </div>
    
    
          <div className='table-Container'>
    
              <div className='tableContBtn'>

                <table className='calulator-table'>
                <thead>
                  <tr className='columnHeading'>
                    <th className='subject'>Subjects</th>
                    <th className='marks'>Marks</th>
                    <th className='level'>Level</th>
                  </tr>
                </thead>
      
                <tbody>
                  {subjects.slice(0,6).map((subject) => (
                    <tr className='tableDivider' key={subject}>
                      <td className='selectWrapper'>
      
                        <select className='selectSubject'
                          value={selectedSubjects[subject]}
                          onChange={(e) => handleSubjectChange(subject, e)}>
      
                          <option value={defaultSubject}>{defaultSubject}</option>
      
                          {subjects.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                          
                        </select>
              
      
                      </td>
      
                      <td>
                        <select className='selectMarks'
                          value={selectedMarks[subject]}
                          onChange={(e) => handleMarksChange(subject, e)}>
                          <option value={defaultMark}>{defaultMark}</option>
                          {marksOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </td>
      
                      <td className='levelHolder'>
                          <h5>{selectedLevels[subject]}</h5>
                      </td>
                        
                    
                    </tr>
                  ))}
                
                </tbody>
                
                </table>
                
                <div className='btnContainer'>
                    <button className='resultsBtn' onClick={calculateAps}>CALCULATE</button>
                    <button className='resetBtn' onClick={handleReset} >RESET</button>
                </div>
              </div>
            
              
            <div className='massegeContainer' >
                
                {/* Results heading div apears only when the total value is not 0 */}
                {total !== 0 ? (<div className='resultsHeading'> <h1>Results</h1> </div>) : ('')}
            
                {/* Notice massege div apears only when the total value is not 0 */}
                
                
                {total !== 0 ?  (<div className={`resultHolder results ${isResultVisible ? 'showResults' : 'hideResults'}`}>
                <p>Your APS is <span>{total}</span> and you've obtained <span>{generalMsg}</span> </p>
                    <img src={noticeIcon}/>
                  <p>{total !== 0 ? noticeMsg : ''}</p>
             
                </div>) :(<div className={`resultHolder instruction ${isInstructionVisible ? 'showInstruct' : 'hiddenInstruct'}`}>
                
                  <p>Your Admission Points Score (APS) gauges your performance in your National Senior Certificate (NSC) exam concerning the criteria for a specific programme you're interested in applying for.
                    <br/>Your APS is rated on a scale with a maximum score of 42 and note that Life Orientation does not count towards your APS.<br/> APS calculator aids you in computing your APS, enabling you to evaluate whether you meet the admission requirements for a specific programme.<br/>When calculating your APS, choose your subject and input the corresponding percentage from the dropdown menu. <br/>If your subject isn't listed, select <span >Other Subject</span> and make sure to fill in all the boxes ,click the <span  className='spanBtn'>calculate</span> button to obtain your APS and <span className='spanBtn'>reset</span> to clear thae table.</p>
             
                </div> ) }  
                
               
            </div>
    
         
    
          </div>
    
    
        </div>
      );
    };

export default ApsCalculator;
