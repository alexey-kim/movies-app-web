import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import * as React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { css } from '../../utils/stylingUtils';

export interface IImageProps {
  readonly altText: string;
  readonly pictureUrls: string[];
  readonly aspectRatio: number;
}

export const Image: React.FC<IImageProps> = (props: IImageProps) => {

  const { altText, pictureUrls } = props;
  const [isVisible, setIsVisible] = React.useState<boolean>(() => false);
  const [isLoaded, setIsLoaded] = React.useState<boolean>(() => false);
  const imageRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
  const classes = useStyles(props);

  // Lazy load image only when the image becomes visible
  useIntersectionObserver<HTMLDivElement>({
    ref: imageRef,
    onIntersect: () => setIsVisible(true),
    observeOnce: true
  });

  return (
    <div
      ref={imageRef}
      className={classes.root}>
      {isVisible && (
        <img
          alt={altText}
          src={pictureUrls[0]}
          srcSet={pictureUrls.length >= 2 ? pictureUrls.slice(1).join(', ') : undefined}
          className={css(classes.aspectRatioBox, classes.image)}
          style={{ opacity: isLoaded ? 1 : 0 }}
          onLoad={() => setIsLoaded(true)}
        />
      )}
      {!isLoaded && (
        <div className={classes.aspectRatioBox}>
          <Skeleton
            animation='wave'
            variant='rect'
            classes={{ root: classes.skeleton }}
          />
        </div>
      )}
    </div>
  );
};

const useStyles = makeStyles(() => createStyles({
  root: {
    position: 'relative',
    overflow: 'hidden',
    paddingTop: (props: IImageProps) => `${props.aspectRatio * 100}%`
  },
  aspectRatioBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  image: {
    transition: 'opacity 400ms ease 0ms'
  },
  skeleton: {
    height: 'inherit'
  }
}));
