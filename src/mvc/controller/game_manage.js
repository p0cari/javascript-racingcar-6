import CarNameError from '../../utils/error/car_name_error.js';
import RacingCntError from '../../utils/error/racing_cnt_error.js';
import InputQuestion from '../../ui/input_question.js';
import userInput from '../../utils/user_input.js';

class GameManage {
  constructor() {
    this.RACING_CAR = null;
    this.RACING_CNT = null;
  }

  async inputRacingCar() {
    this.RACING_CAR = await userInput(InputQuestion.racingCar());
    this.RACING_CAR = this.RACING_CAR.split(',');
    await this.checkCarName();
  }

  async checkCarName() {
    const ERROR = new CarNameError(this.RACING_CAR);
    if (!ERROR.carNameNotExist()
        && !ERROR.carNameNotString()
        && !ERROR.carNameLenOverFive()
        && !ERROR.carNameBlank()
        && !ERROR.carNameDuplication()) {
      await this.inputRacingCnt();
    }
  }

  async inputRacingCnt() {
    this.RACING_CNT = await userInput(InputQuestion.racingCnt());
    this.checkRacingCnt();
  }

  checkRacingCnt() {
    const ERROR = new RacingCntError(this.RACING_CNT);
    if (!ERROR.racingCntNotExist()
        && !ERROR.racingCntNotNum()
        && !ERROR.racingCntNotPositiveNum()) {}
  }
}

export default GameManage;
