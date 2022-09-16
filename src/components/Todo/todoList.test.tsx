import {
  cleanup,
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { useState } from 'react';

import { describe, it, afterAll } from '@jest/globals';

import Home from '~pages/home';

// 현재 파일 테스트가 완료된 이후 dom에 렌더링된 요소들을 다음 테스트를 위해 삭제처리
afterAll(() => {
  cleanup();
});

describe('투두리스트', () => {
  const mount = render(<Home />);

  it('투두 등록 테스트', async () => {
    // 컴포넌트가 제대로 렌더링 됐는지 확인하기 위해 내용 확인
    screen.getByText('TODO 리스트'); // 성공

    mount.getByText('TODO 리스트 22');

    // 아이템 추가 버튼 클릭
    const addButton = screen.getByTestId('addButton');
    fireEvent.click(addButton);

    // 내용 없을때 에러 메세지 출력 -> formik validate 처리가 비동기임
    await screen.findByText('내용을 입력해주세요');

    // 내용 입력
    const todoInput = screen.getByTestId('todoInput');

    fireEvent.change(todoInput, {
      target: {
        value: '첫번째',
      },
    });

    // 에러 메세지 삭제 확인
    await waitForElementToBeRemoved(() => screen.getByText('내용을 입력해주세요')); // 비동기로 element 삭제 확인

    // 등록 버튼 클릭
    fireEvent.click(addButton);

    // input 값 비워졌는지 체크
    await waitFor(() => expect(todoInput).toHaveValue(''));

    // 리스트에 정상적으로 등록되었는지 확인
    screen.getByText('첫번째');
  });
});
