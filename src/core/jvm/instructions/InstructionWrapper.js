/** @ignore */
const AbstractInstruction = require('./AbstractInstruction');

export default class InstructionWrapper extends AbstractInstruction {

  constructor(instruction) {
    super(instruction.methodInfo, instruction.idx, instruction.opcode);
    this.instruction = instruction;
  }

  get size() {
    return this.instruction.size;
  }

  read(buffer) {
    this.instruction.read(buffer);
  }

  write(buffer) {
    this.instruction.write(buffer);
  }
}
