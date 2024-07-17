import { EasyScrollContainer } from 'react-easy-scrollbar';
import { useRef } from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}


const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

type Props = {
  addRef?: boolean
}

const EContainer = ({addRef}:Props) => {
  const ref = useRef<HTMLDivElement>(null);

  // ... You can use ref to complete your own logic, including event handling for scrollbars


  return <EasyScrollContainer style={{ width: '100%', height: 500, overflow: 'auto', position: 'relative' }}
                              ref={addRef ? ref : undefined}>
    <p style={{ width: '200%' }}>
      ### Introduction to Scrollbars

      Scrollbars are an essential component of graphical user interfaces (GUIs), enabling users to navigate and
      manipulate content that exceeds the visible area within a limited space. Scrollbars are commonly found in windows,
      dialog boxes, text editors, web browsers, and other applications, providing users with a convenient way to
      navigate and view content.

      #### Components of a Scrollbar

      1. **Track**: The background part of the scrollbar, typically a vertical or horizontal bar.
      2. **Thumb**: The movable small block within the track, indicating the current position of the displayed content
      within the entire content.
      3. **Arrow Buttons**: Buttons located at both ends of the scrollbar that allow users to fine-tune the display
      position of the content by clicking them.

      #### Functions of a Scrollbar

      - **Navigation**: Users can drag the thumb or click the arrow buttons to browse different parts of the content.
      - **Positioning**: The position of the thumb reflects the relative position of the currently displayed content
      within the entire content.
      - **Zooming**: In some applications, scrollbars can also be used to adjust the zoom level of the content.

      #### Types of Scrollbars

      1. **Vertical Scrollbar**: Typically located on the right side of a window or text box, used for scrolling content
      up and down.
      2. **Horizontal Scrollbar**: Usually located at the bottom of a window or text box, used for scrolling content
      left and right.
      3. **Combined Scrollbars**: In some applications, both vertical and horizontal scrollbars appear simultaneously to
      support all-directional content navigation.

      #### Design and User Experience of Scrollbars

      The design of scrollbars directly impacts user experience. A well-designed scrollbar should possess the following
      characteristics:

      - **Visibility**: Scrollbars should be clearly visible when needed but should not interfere with the user when not
      in use.
      - **Usability**: The thumb should be easy to drag, and the arrow buttons should respond quickly.
      - **Consistency**: The appearance and behavior of scrollbars should be consistent across different applications
      and operating systems.

      #### Technical Implementation of Scrollbars

      In web design, scrollbars can be customized using CSS to match the overall style of the webpage. In desktop
      applications, scrollbars are typically provided by the operating system, but developers can also customize them
      through programming interfaces.

      #### Conclusion

      Scrollbars, as a fundamental element of the user interface, offer users an efficient way to navigate content.
      Whether browsing the web, editing documents, or operating applications, scrollbars are crucial tools for enhancing
      user experience. With technological advancements, the design and functionality of scrollbars continue to evolve to
      meet users' demands for more efficient and intuitive operations.
    </p>
  </EasyScrollContainer>
};

export default EContainer;
