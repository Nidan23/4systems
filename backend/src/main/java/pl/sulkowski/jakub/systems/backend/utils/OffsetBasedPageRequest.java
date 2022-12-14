package pl.sulkowski.jakub.systems.backend.utils;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.Optional;

public class OffsetBasedPageRequest implements Pageable {
    private final long limit;
    private final long offset;
    private final Sort sort;
    private final Sort.Direction sortDirection;
    private final String sortFieldName;
    public OffsetBasedPageRequest(long limit, long offset, Sort.Direction direction, String sortFieldName) {
        if (limit < 1) {
            throw new IllegalArgumentException("Limit must not be less than one!");
        }
        if (offset < 0) {
            throw new IllegalArgumentException("Offset index must not be less than zero!");
        }
        this.limit = limit;
        this.offset = offset;
        this.sort = Sort.by(direction, sortFieldName);
        this.sortDirection = direction;
        this.sortFieldName = sortFieldName;
    }

    @Override
    public boolean isPaged() {
        return Pageable.super.isPaged();
    }

    @Override
    public boolean isUnpaged() {
        return Pageable.super.isUnpaged();
    }

    @Override
    public int getPageNumber() {
        return Integer.parseInt(String.valueOf(offset / limit));
    }
    @Override
    public int getPageSize() {
        return Integer.parseInt(String.valueOf(limit));
    }
    @Override
    public long getOffset() {
        return offset;
    }
    @Override
    public Sort getSort() {
        return sort;
    }

    @Override
    public Sort getSortOr(Sort sort) {
        return Pageable.super.getSortOr(sort);
    }

    @Override
    public Pageable next() {
        return new OffsetBasedPageRequest(getPageSize(), (int) (getOffset() + getPageSize()), sortDirection, sortFieldName);
    }
    public Pageable previous() {
        return hasPrevious() ?
                new OffsetBasedPageRequest(getPageSize(), (int) (getOffset() - getPageSize()), sortDirection, sortFieldName): this;
    }
    @Override
    public Pageable previousOrFirst() {
        return hasPrevious() ? previous() : first();
    }
    @Override
    public Pageable first() {
        return new OffsetBasedPageRequest(getPageSize(), 0, sortDirection, sortFieldName);
    }

    @Override
    public Pageable withPage(int pageNumber) {
        return null;
    }

    @Override
    public boolean hasPrevious() {
        return offset > limit;
    }

    @Override
    public Optional<Pageable> toOptional() {
        return Pageable.super.toOptional();
    }
}