import styled from 'styled-components';
import Layout from '../components/Layout';

const TagSection = styled.section`
	border: 1px solid red;
`;

const NotesSection = styled.section`
	border: 1px solid red;
`;

const CategorySection = styled.section`
	border: 1px solid red;
`;

const NumberPadSection = styled.section`
	border: 1px solid red;
`;

export default function Money() {
	return (
		<Layout>
			Money
			<TagSection>
				<ol>
					<li>衣</li>
					<li>食</li>
					<li>住</li>
					<li>行</li>
				</ol>
				<button>新增标签</button>
			</TagSection>
			<NotesSection>
        <label>
          <span>备注</span>
          <input type="text" />
        </label>
      </NotesSection>
			<CategorySection>
				<ul>
					<li>支出</li>
					<li>收入</li>
				</ul>
			</CategorySection>
			<NumberPadSection>
				<div>100</div>
				<div>
					<button>1</button>
					<button>1</button>
					<button>1</button>
					<button>1</button>
					<button>1</button>
					<button>1</button>
					<button>1</button>
					<button>1</button>
					<button>1</button>
				</div>
			</NumberPadSection>
		</Layout>
	);
}
