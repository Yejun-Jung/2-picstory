package picstory.backend.web.dto;

import java.util.List;

public record UpdatePostTagRequest(
        List<String> tags
) {
}
