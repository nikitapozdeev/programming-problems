module.exports = function ({ participants, sports }) {  
  /**  
   * Подобно оператору new создает экземпляр объекта,  
   * используя функцию-конструктор и параметры для нее  
   */  
  function constructFrom (fnConstructor, ...params) {
    const res = {};  
    Object.setPrototypeOf(res, fnConstructor.prototype);
    fnConstructor.bind(res, ...params)();
    return res; 
  }  

  /**  
   * Создает пары вида ["вид спорта", "имя участника"],  
   * где первому виду спорта соответствует последний участник  
   */  
  function assignParicipants () {  
    const { participants, sports } = this;
    const len = sports.length - 1;  

    return Array.from({ length: sports.length }, (_, k) => [sports[k], participants[len - k]]);  
  }  

  function Contest (participants, sports) {  
    this.participants = participants;  
    this.sports = sports;  
  }  

  Contest.prototype.assignParicipants = assignParicipants;
  const contest = constructFrom(Contest, participants, sports);  
  return contest.assignParicipants();  
}