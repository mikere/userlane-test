import { RenderStatusPipe } from './render-status.pipe';

describe('RenderStatusPipe', () => {
  let pipe: RenderStatusPipe;

  beforeEach(() => {
    pipe = new RenderStatusPipe();
  });

  it('should return "Online" when the input is "online"', () => {
    expect(pipe.transform('online')).toBe('Online');
  });

  it('should return "Offline" when the input is "offline"', () => {
    expect(pipe.transform('offline')).toBe('Offline');
  });

  it('should return "Do not disturb" when the input is "dnd"', () => {
    expect(pipe.transform('dnd')).toBe('Do not disturb');
  });

  it('should return "unknown status" for an unrecognized status', () => {
    expect(pipe.transform('away')).toBe('unknown status');
  });

  it('should return "unknown status" for an empty string', () => {
    expect(pipe.transform('')).toBe('unknown status');
  });

  it('should return "unknown status" for null or undefined', () => {
    expect(pipe.transform(null as any)).toBe('unknown status');
    expect(pipe.transform(undefined as any)).toBe('unknown status');
  });
});
