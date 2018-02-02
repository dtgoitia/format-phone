import formatPhone from '../src/phone-formatter';
import {expect} from 'chai';

describe('Spanish phone numbers', () => {
  it('return as is if prefix found ', () => {
    expect(formatPhone('+34 944 646 821')).to.equal('+34 944 646 821');
  });
  it('recognise and format landline (without spaces)', () => {
    expect(formatPhone('944646821')).to.equal('+34 944 646 821');
  });
  it('recognise and format landline (with spaces)', () => {
    expect(formatPhone('944 646 821')).to.equal('+34 944 646 821');
  });
  it('recognise and format mobile (without spaces)', () => {
    expect(formatPhone('655746535')).to.equal('+34 655 746 535');
  });
  it('recognise and format mobile (with spaces, option 1)', () => {
    expect(formatPhone('655 746 535')).to.equal('+34 655 746 535');
  });
  it('recognise and format mobile (with spaces, option 2)', () => {
    expect(formatPhone('655 74 65 35')).to.equal('+34 655 746 535');
  });
  it('recognise and format mobile (with crazy spaces)', () => {
    expect(formatPhone('6 5 5 7 4 6 5 3 5')).to.equal('+34 655 746 535');
  });
});

describe('United Kingdom phone numbers', () => {
  it('return as is if prefix found ', () => {
    expect(formatPhone('+44 7597 178 112')).to.equal('+44 7597 178 112');
  });
  it('recognise and format landline 01 (without spaces)', () => {
    expect(formatPhone('01002003655')).to.equal('+44 1002 003 655');
  });
  it('recognise and format landline 01 (with spaces)', () => {
    expect(formatPhone('0100 200 3655')).to.equal('+44 1002 003 655');
  });
  it('recognise and format landline 02 (without spaces)', () => {
    expect(formatPhone('02002003655')).to.equal('+44 2002 003 655');
  });
  it('recognise and format landline 01 (with spaces)', () => {
    expect(formatPhone('0200 200 3655')).to.equal('+44 2002 003 655');
  });
  it('recognise and format landline 03 (without spaces)', () => {
    expect(formatPhone('03002003655')).to.equal('+44 3002 003 655');
  });
  it('recognise and format landline 03 (with spaces)', () => {
    expect(formatPhone('0300 200 3655')).to.equal('+44 3002 003 655');
  });
  it('recognise and format mobile (without spaces)', () => {
    expect(formatPhone('07528173120')).to.equal('+44 7528 173 120');
  });
  it('recognise and format mobile (with spaces)', () => {
    expect(formatPhone('07528 173 120')).to.equal('+44 7528 173 120');
  });
  it('recognise and format mobile (with crazy spaces)', () => {
    expect(formatPhone('0 7 5 2 8 1 7 3 1 2 0')).to.equal('+44 7528 173 120');
  });
});

describe('Other cases', () => {
  it('return as is if not recognised', () => {
    expect(formatPhone('1300 200 365')).to.equal('1300 200 365');
  });
});