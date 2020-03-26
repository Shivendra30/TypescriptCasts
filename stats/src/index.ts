import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

//Open CSV file and parse the data from it
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary: Summary = Summary.winsAnalysisWithConsoleReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
