import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResults';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    const wins = matches.reduce((acc, value) => {
      if (
        (value[1] === this.team && value[5] === MatchResult.HomeWin) ||
        (value[2] === this.team && value[5] === MatchResult.AwayWin)
      )
        acc++;

      return acc;
    }, 0);
    return `Team ${this.team} won ${wins} games`;
  }
}
