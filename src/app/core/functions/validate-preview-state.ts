import {PreviewState} from '../state/models/preview-state.model';
import {LinkData} from '../interfaces/dropdown-option.interface';

export function validatePreviewState(state: PreviewState): string[] {
  return [...validateLinks(state.linksData), ...validateProfileInfo(state)];
}

export function validateLinks(linksData: LinkData[]): string[] {
  const errors: string[] = [];

  if (linksData.length === 0) {
    errors.push('You must add at least one link');
  } else {
    linksData.forEach((link, index) => {
      if (!link.platform?.iconKey.trim()) {
        errors.push(`The link ${index + 1} has no platform`);
      }
      if (!link.link?.trim()) {
        errors.push(`The link ${index + 1} has no URL`);
      }
    });
  }

  return errors;
}

export function validateProfileInfo(state: PreviewState): string[] {
  const errors: string[] = [];

  if (!state.name.trim()) errors.push('First name can’t be empty');
  if (!state.lastName.trim()) errors.push('Last name can’t be empty');
  if (!state.email.trim()) errors.push('Email can’t be empty');
  if (!state.photoUrl.trim()) errors.push('Image is required');

  return errors;
}
