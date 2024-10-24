import { Children, cloneElement, FC, isValidElement, ReactElement, ReactNode } from 'react';
import Container from '@/components/atoms/Grid/Container';
import Row from '@/components/atoms/Grid/Row';
import { ColumnProps } from '@/components/atoms/Grid/Column';

interface GridProps {
  children: ReactElement<ColumnProps> | ReactElement<ColumnProps>[];
  className?: string;
}

const Grid: FC<GridProps> = ({ children, className = '' }) => {
  return (
    <Container className={className}>
      <Row>
        {Children.map(children, (child) => {
          if (isValidElement<ColumnProps>(child)) {
            // 각 Column에 기본 span을 12로 설정 (이미 span이 설정되어 있다면 덮어쓰지 않음)
            const newSpan = child.props.span ?? 12;
            return cloneElement(child, { span: newSpan });
          }
          return child;
        })}
      </Row>
    </Container>
  );
};

export default Grid;