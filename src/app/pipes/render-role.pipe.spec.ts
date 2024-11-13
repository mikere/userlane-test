import { RenderRolePipe } from './render-role.pipe';

describe('RenderRolePipe', () => {
  let pipe: RenderRolePipe;

  beforeEach(() => {
    pipe = new RenderRolePipe();
  });

  it('should return "Admin" when the input is "admin"', () => {
    expect(pipe.transform('admin')).toBe('Admin');
  });

  it('should return "Guest" when the input is "guest"', () => {
    expect(pipe.transform('guest')).toBe('Guest');
  });

  it('should return "Member" when the input is "member"', () => {
    expect(pipe.transform('member')).toBe('Member');
  });

  it('should return "unknown role" for an unrecognized role', () => {
    expect(pipe.transform('unknown')).toBe('unknown role');
  });

  it('should return "unknown role" for an empty string', () => {
    expect(pipe.transform('')).toBe('unknown role');
  });

  it('should return "unknown role" for null or undefined', () => {
    expect(pipe.transform(null as any)).toBe('unknown role');
    expect(pipe.transform(undefined as any)).toBe('unknown role');
  });
});
