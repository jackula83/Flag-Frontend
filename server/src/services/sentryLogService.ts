import * as Sentry from '@sentry/node';
import { injectable } from 'inversify';
import { ConsoleStyle } from "../common/console";
import { LogService } from "../common/types";

@injectable()
export class SentryLogService implements LogService {
  error(error: string | Error): void {
    const exception = error instanceof Error
      ? error
      : new Error(error);    
    const [subject, body] = this.getInfoLog(exception.message);
    this.logToConsole(subject, body);
    Sentry.captureException(exception);
  }

  info(message: string): void {    
    const [subject, body] = this.getInfoLog(message);
    this.logToConsole(subject, body);
    Sentry.captureMessage(message, Sentry.Severity.Info);
  }

  private getInfoLog = (message: string): [string, string] => [
      `SentryLog(${nameof(this.info)})`,
     `${ConsoleStyle.FgYellow}${message}${ConsoleStyle.Reset}`
    ];

  private getErrorLog = (message: string): [string, string] => [
    `SentryLog(${nameof(this.error)})`,
    `${ConsoleStyle.FgRed}${message}${ConsoleStyle.Reset}`
  ]

  private logToConsole = (subject: string, body: string) => {
    console.error(`${subject}: ${body}`);
  }
}